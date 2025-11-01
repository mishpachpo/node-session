import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const UpdateProudct = () => {
    const [visible, setVisible] = useState(false);

    const footerContent = (
        <div>
            <Button label="לא" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="כן" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Button label="פתח חלון" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog 
                header="עדכון מוצר" 
                visible={visible} 
                style={{ width: '50vw' }} 
                onHide={() => setVisible(false)} 
                footer={footerContent}
            >
                <p className="m-0">
                    כאן תוכל לעדכן את פרטי המוצר. שים לב שכל שינוי ייכנס לתוקף לאחר שמירה.
                </p>
            </Dialog>
        </div>
    );
};

export default UpdateProudct;
