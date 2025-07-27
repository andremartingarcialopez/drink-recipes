import type { StateCreator } from "zustand";
import type { Notification } from "../types/types";



export type NotificationSliceType = {
    notification: Notification
}

export const notificationSlice: StateCreator<NotificationSliceType> = () => ({
    notification: {
        message: "",
        error: false,
        show: false
    }
})