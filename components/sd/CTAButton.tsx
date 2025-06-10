"use client"
import { Modal } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export function CTAButton({ small }: { small?: boolean }) {
    const router = useRouter()
    const [modalOpen, setModalOpen] = useState(false)
    return (<>

        <button className={`btn btn-accent rounded-full! ${small ? "" : "btn-lg"}`} onClick={()=>setModalOpen(true)}>
            Get Started
        </button>
        <Modal centered title="get started" open={modalOpen} footer={null} onCancel={()=>setModalOpen(!modalOpen)}>
            <button className="btn btn-link" onClick={()=>router.push("/developer/form")}>request a website</button>
        </Modal>
    </>
    );
}
