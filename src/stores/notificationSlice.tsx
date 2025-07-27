import type { StateCreator } from "zustand";
import type { Notification } from "../types/types";



export type NotificationSliceType = {
    notification: Notification
    showNotification: (notification: Notification) => void
    removeNotification: () => void
}

export const notificationSlice: StateCreator<NotificationSliceType> = (set, get) => ({
    notification: {
        message: "",
        error: false,
        show: false
    },
    showNotification: (notification) => {
        set((state) => ({
            ...state,
            notification: {
                message: notification.message,
                error: notification.error,
                show: notification.show
            }
        }))
        setTimeout(() => {
            get().removeNotification()
        }, 3000);
    },
    removeNotification: () => {
        set(() => ({
            notification: {
                message: "",
                error: false,
                show: false
            },
        }))
    }
})