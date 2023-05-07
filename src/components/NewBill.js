import { useCallback, useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';
import './styles/NewBill.css';
import CustomBill from './CustomBill'

const NewBill = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [textResult, setTextResult] = useState("");

    const worker = createWorker();

    const convertBillToText = useCallback(async () => {
        if (!selectedImage) return;
        await worker.load();
        await worker.loadLanguage("eng");
        await worker.initialize("eng");
        const { data } = await worker.recognize(selectedImage);
        console.log(data.text);
        setTextResult(data.text);
    }, [worker, selectedImage]);

    useEffect(() => {
        convertBillToText();
    }, [selectedImage, convertBillToText])

    const handleChangeImage = e => {
        if (e.target.files[0]) {
            setSelectedImage(e.target.files[0]);
        } else {
            setSelectedImage(null);
            setTextResult("")
        }
    }

    return (
        <div className="new-bill-page">
            <h1>Bill</h1>
            <p>Upload your bill</p>
            <div className="input-wrapper">
                <label htmlFor="upload">Upload Image</label>
                <input type="file" id="upload" accept='image/*' onChange={handleChangeImage} />
            </div>

            <div className="result">
                {selectedImage && (
                    <div className="box-image">
                        <img src={URL.createObjectURL(selectedImage)} alt="thumb" />
                    </div>
                )}
                {textResult && (
                    <div className="box-p">
                        <p>{textResult}</p>
                    </div>
                )}
            </div>
            <div className='custom-bill'>
                <CustomBill/>
            </div>
        </div>
    )
}

export default NewBill;