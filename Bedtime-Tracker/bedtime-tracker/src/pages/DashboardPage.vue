<template>
    <div>
        <v-container align="center" justify="center">
            <v-row>
                <h1>Daily Tracker</h1>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-btn class="text-none new-entry" prepend-icon="mdi-plus" 
                        color="blue" variant="tonal" rounded="md" 
                        size="x-large" @click="isDialogOpen = !isDialogOpen" >
                        New Entry
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
        <v-dialog id="new-entry-overlay" v-model="isDialogOpen" 
            class="d-flex align-center justify-center" width="50%">
            <v-card title="Add Entry" class="d-flex justify-center align-center"
                height="100%" width="100%">
                <v-card-text class="w-100 h-100">
                    <v-row>
                        <v-col cols="12">
                            <v-date-input label="Date" v-model="date"></v-date-input>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field
                                @click="menu2 = !menu2"
                                v-model="sleepTime"
                                label="Sleep Time"
                                prepend-icon="mdi-clock-time-four-outline"
                                readonly>
                                <v-menu
                                    v-model="menu2"
                                    :close-on-content-click="false"
                                    activator="parent"
                                    transition="scale-transition">
                                    <v-time-picker
                                    v-if="menu2"
                                    v-model="sleepTime"
                                    full-width
                                    ></v-time-picker>
                                    <v-btn text="close" @click="menu2 = !menu2"></v-btn>
                                </v-menu>
                        </v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                @click="menu1 = !menu1"
                                v-model="wakeUpTime"
                                label="Wakeup Time"
                                prepend-icon="mdi-clock-time-four-outline"
                                readonly>
                                <v-menu
                                    v-model="menu1"
                                    :close-on-content-click="false"
                                    activator="parent"
                                    transition="scale-transition">
                                    <v-time-picker
                                    v-if="menu1"
                                    v-model="wakeUpTime"
                                    full-width
                                    ></v-time-picker>
                                    <v-btn text="close" @click="menu1 = !menu1"></v-btn>
                                </v-menu>
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-row>
                        <v-col>
                            <v-btn text="Save" variant="tonal" color="blue" @click="onSave()">
                            </v-btn>
                        </v-col>
                        <v-col>
                            <v-btn text="Reset" variant="panel" @click="onReset()">
                            </v-btn>
                        </v-col>
                        <v-col>
                            <v-btn text="Cancel" variant="panel" @click="isDialogOpen = !isDialogOpen" >
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { VDateInput } from 'vuetify/labs/VDateInput';
import { VTimePicker } from 'vuetify/labs/VTimePicker';


export default {
    name: 'DashboardPage',
    components: {
        VDateInput,
        VTimePicker,
    },
    data: function() {
        return {
            menu1: false,
            menu2: false,
            date: null,
            sleepTime: null,
            wakeUpTime: null,
            isDialogOpen: false,
            entryList: null,
        }
    },
    methods: {
        onSave() {
            const newEntry = {
                date: this.date,
                sleepTime: this.sleepTime,
                wakeUpTime: this.wakeUpTime,
                sleepDuration: this.wakeUpTime - this.sleepTime,
            }
            this.entryList.push(newEntry);
            localStorage.setItem(`${this.$store.userInfo.id}-sleep-entries`, JSON.stringify(this.entryList));
            this.isDialogOpen = !this.isDialogOpen;
        },
        onReset() {
            this.date = null;
            this.sleepTime = null;
            this.wakeUpTime = null;
        },
    },
    mounted() {
        this.entryList = (localStorage.getItem(`${this.$store.userInfo.id}-sleep-entries`)) ?
        JSON.parse(localStorage.getItem(`${this.$store.userInfo.id}-sleep-entries`)) :
        [];
    }
}
</script>
