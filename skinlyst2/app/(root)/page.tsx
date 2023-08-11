"use client"

import { UserButton } from "@clerk/nextjs"
import { Modal } from "@/components/ui/modal"
  

const SetupPage = () => {
    return (
        <div className="p-4">
            <Modal title="Test" description="test desc  " isOpen onClose={() => { }}>
                Children
            </Modal>
           <UserButton afterSignOutUrl="/" />
        </div>
    )
}

export default SetupPage