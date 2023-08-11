"use client"

import { DialogContent, DialogDescription } from "./dialog";
import { Dialog, DialogHeader, DialogTitle } from "./dialog";

interface ModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode
}


export const Modal: React.FC<ModalProps> = ({
    title,
    description,
    isOpen,
    onClose,
    children
}) => { 
    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    }
    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
            <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>
                    {description}
                </DialogDescription>
            </DialogHeader>
            </DialogContent>
            <div>
                {children}
            </div>
        </Dialog>
    )
 }