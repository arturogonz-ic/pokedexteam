"use client";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "./dialog";
import { Button } from "./Button";

export function AlertDialog({ open, onClose, title, message }) {
    return (
        <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
            <DialogContent showCloseButton={false}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <p className="text-sm text-gray-600 dark:text-gray-400">{message}</p>
                <DialogFooter className="border-none bg-transparent -mx-0 -mb-0 p-0 pt-2">
                    <Button onClick={onClose} className="w-full">Aceptar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export function ConfirmDialog({ open, onClose, onConfirm, title, message }) {
    return (
        <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
            <DialogContent showCloseButton={false}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <p className="text-sm text-gray-600 dark:text-gray-400">{message}</p>
                <DialogFooter className="border-none bg-transparent -mx-0 -mb-0 p-0 pt-2 flex-row justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm rounded-[5px] border border-gray-300 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                    >
                        Cancelar
                    </button>
                    <Button variant="danger" onClick={() => { onConfirm(); onClose(); }}>
                        Eliminar
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
