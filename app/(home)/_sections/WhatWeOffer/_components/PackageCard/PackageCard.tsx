import React from 'react'
import styles from './styles/package_card.module.css';
import BookACall from '../BookACall/BookACall';

interface PackageCard{
    title : string;
    description : string;
    deadline : string;
    color? : string;
    core : Record<string, string[]>
    expansion : string[]
    amount : string
    main? : boolean
}

export default function PackageCard({color = "bg-(--color-foreground)", title, deadline, description, core, expansion, amount, main = false} : PackageCard) {
  
  const scheme = main ? {
    bg: '#E33E3C',
    text: 'var(--color-foreground)',
    textClass: 'text-(--color-foreground)',
    dotClass: 'bg-(--color-foreground)',
    buttonBg: 'var(--color-foreground)',
    buttonText: 'var(--color-background)',
  } : {
    bg: 'var(--color-foreground)',
    text: 'var(--color-background)',
    textClass: 'text-(--color-background)',
    dotClass: 'bg-(--color-background)',
    buttonBg: 'var(--color-background)',
    buttonText: 'var(--color-foreground)',
  }

  return (
    <div className="break-inside-avoid mb-4">
        <div className={`w-full sm:p-5 p-4 rounded-4xl`} style={{ backgroundColor: scheme.bg }}>
            <div className='flex flex-col w-full gap-4 sm:gap-6 sm:pb-16 pb-10'>
                <div className='flex flex-col w-full pb-2 gap-2' style={{ borderBottom: `1px solid ${scheme.text}` }}>
                    <div className='flex flex-row w-full justify-between'>
                        <h2 className={styles.package_title} style={{ color: scheme.text }}>
                            {title}
                        </h2>
                        <p className={styles.package_deadline} style={{ color: scheme.text }}>
                            {deadline}
                        </p>
                    </div>
                    <p className={styles.package_deadline} style={{ color: scheme.text }}>
                        {description}
                    </p>
                </div> 
                <div className='flex flex-col'>
                    <h3 className={`pb-1 ${styles.deliverable_heading}`} style={{ color: scheme.text }}>CORE DELIVERABLES</h3>
                    <div>
                        {
                            Object.entries(core).length > 1 ? (
                                Object.entries(core).map(([key, values]) => (
                                    <div key={key} className='flex flex-col pl-2.5 pb-3'>
                                        <p className={styles.deliverable_subheading} style={{ color: scheme.text }}>{key}</p>
                                        <div className='flex flex-col pt-0.5 gap-1.5'>
                                            {values.map((value, i) => (
                                                <div key={i} className='flex flex-row gap-3 items-center'>
                                                    <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full`} style={{ backgroundColor: scheme.text }}/>
                                                    <p className={styles.deliverable_body} style={{ color: scheme.text }}>{value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                Object.entries(core).map(([key, values]) => (
                                    <div key={key} className='flex flex-col pl-2 pb-3'>
                                        <div className='flex flex-col pt-0.5 gap-1.5'>
                                            {values.map((value, i) => (
                                                <div key={i} className='flex flex-row gap-3 items-center'>
                                                    <div className='w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full' style={{ backgroundColor: scheme.text }}/>
                                                    <p className={styles.deliverable_body} style={{ color: scheme.text }}>{value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            )
                        }
                    </div>
                    <h3 className={`pb-1 pt-4 ${styles.deliverable_heading}`} style={{ color: scheme.text }}>SCOPE EXPANSION</h3>
                    <div>
                        <div className='flex flex-col pt-0.5 pl-2.5 gap-1.5'>
                            {expansion.map((value, i) => (
                                <div key={i} className='flex flex-row gap-3 items-center'>
                                    <div className='w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full' style={{ backgroundColor: scheme.text }}/>
                                    <p className={styles.deliverable_body} style={{ color: scheme.text }}>{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>           
            </div>

            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <p className='font-(family-name:--font-fustat) text-[10px] sm:text-[12px] tracking-[-5%] font-bold leading-3' style={{ color: scheme.text }}>
                        starting from
                    </p>
                    <p className='font-(family-name:--font-fustat) text-[40px] sm:text-[56px] tracking-[-5%] font-bold sm:leading-16 leading-10' style={{ color: scheme.text }}>
                        {amount}
                    </p>
                </div>
                <BookACall bgColor={scheme.buttonBg} textColor={scheme.buttonText} />
            </div>
        </div>
    </div>
  )
}