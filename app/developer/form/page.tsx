"use client"
import React, { useState } from 'react'
import formConfig from './form.json'
import faqsData from './faq.json'
import tosData from './tos.json'
import "./styles.css"
import { Poppins, League_Spartan } from 'next/font/google'
import { Footer } from '@/components/sd/Footer'
import { FaPlus } from 'react-icons/fa'
import { Modal } from 'antd'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

const leagueSpartan = League_Spartan({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})
const Page = () => {
    const [tosOpen, setTosOpen] = useState(false)

    return (
        <div className={`min-h-screen ${poppins.className}`}>
            <Modal
                centered
                title={tosData.title}
                open={tosOpen}
                onCancel={() => setTosOpen(false)}
                onOk={() => setTosOpen(false)}
                footer={() => <button className='btn mt-4' onClick={()=>setTosOpen(false)}>close</button>}>
                <div className='max-h-80 overflow-y-scroll'>

                    {tosData.sections.map((section, index) => (
                        <div key={index} className='py-4 space-y-2'>
                            <p className='font-medium'>{section.title}</p>
                            <p className='text-secondary'>{section.content}</p>
                        </div>
                    ))}
                </div>
            </Modal>
            <div className='p-4 max-w-5xl mx-auto'>

                <div className='p-4'>
                    {formConfig.title && <h1 className={`text-3xl font-bold my-4 ${leagueSpartan.className}`}>{formConfig.title}</h1>}
                    <p>before proceeding, please read our <span className='text-accent hover:border-b cursor-pointer' onClick={() => setTosOpen(!tosOpen)}>terms of services</span>.</p>
                </div>
                <FormBlock />
                <p className='mb-20 mt-4'>by submitting, you agree to our <span className='text-accent hover:border-b cursor-pointer' onClick={() => setTosOpen(!tosOpen)}>terms of services</span>.</p>
                <FaqsBlock />
            </div>
            <Footer />
        </div>
    )
}

function FormBlock() {
    return (<form>
        <div>
            {formConfig.sections.map((section, index) => <section key={index} className="mb-10 p-4 rounded-lg bg-white">
                <p className="text-lg font-medium mb-4 text-primary">{section.title}</p>
                <div>
                    {section.fields.map((field, fieldIndex) => <div key={fieldIndex} className="mb-4">
                        <label className="block text-sm font-medium mb-1">{field.label} {!field.required && <span className='badge'>optional</span>}</label>
                        <label className="block text-xs text-gray-500 mb-4">{field.description}</label>
                        {field.type === 'text' && <input type="text" className="w-full p-2 border border-neutral-100 bg-neutral-100/50 rounded outline-none" />}
                        {field.type === 'email' && <input type="email" className="w-full p-2 border border-neutral-100 bg-neutral-100/50 rounded  outline-none" />}
                        {field.type === 'textarea' && <textarea className="w-full p-2 border border-neutral-100 bg-neutral-100/50 rounded outline-none" rows={4}></textarea>}
                        {field.type === "radio" && field.options && field.options.map((option, optionIndex) => <div key={optionIndex} className="flex items-center mb-2">
                            <input type="radio" id={`${field.label}-${optionIndex}`} name={field.label} className="mr-2" />
                            <label htmlFor={`${field.label}-${optionIndex}`} className="text-sm">{option.label} <br /> <span className='text-xs text-muted'>{option.description}</span></label>
                        </div>)}
                        {field.type === "checkbox" && field.options && field.options.map((option, optionIndex) => <div key={optionIndex} className="flex items-center mb-2">
                            <input type="checkbox" id={`${field.label}-${optionIndex}`} name={field.label} className="mr-2" />
                            <label htmlFor={`${field.label}-${optionIndex}`} className="text-sm">{option.label} <br /> <span className='text-xs text-muted'>{option.description}</span></label>
                        </div>)}
                    </div>)}
                </div>
            </section>)}
        </div>
        <button type="submit" className="btn btn-accent w-full">Submit</button>
    </form>);
}

function FaqsBlock() {
    const [openIndexes, setOpenIndexes] = useState<number>(-1);

    const handleToggle = (index: number) => {
        setOpenIndexes(index === openIndexes ? -1 : index);
    };


    return (
        <div className='mb-8'>
            <p className='font-bold text-2xl mb-8'>{faqsData.title}</p>

            {faqsData.items.map((faq, index) => {
                const open = openIndexes === index;
                return (
                    <div key={index}>
                        <button
                            type="button"
                            className="text-lg font-medium w-full text-left p-4 text-primary hover:bg-neutral-100 flex justify-between cursor-pointer"
                            onClick={() => handleToggle(index)}
                        >
                            {faq.question}
                            <FaPlus className={` transition-all duration-300 ${open ? " rotate-45" : ""}`} />
                        </button>
                        {open && <p className='p-8 text-sm text-secondary'>{faq.answer}</p>}
                    </div>
                );
            })}
        </div>
    );
}

export default Page