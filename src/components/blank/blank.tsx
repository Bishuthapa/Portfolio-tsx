// 1st// function Blank(){
//     return <>
//     (
//         <div className="h-auto w-full bg-zinc-900">
//             <div
//                 className="mx-auto my-10 shadow-lg p-[60px_80px] font-sans text-base relative overflow-auto"
//                 style={{
//                     width: '794px',
//                     height: '1123px',
//                     fontFamily: 'Calibri, Arial, sans-serif',
//                     color: 'white'
//                 }}
//                 contentEditable
//                 suppressContentEditableWarning
//             >
//         <p>Hello</p>
//         {/* Add, edit, and delete functionality is enabled by contentEditable.
//             For more advanced controls, you can add toolbar buttons below. */}
//     </div>

//          </div>
//     )
    
//     </>
// }

// export default Blank

//2nd// function Blank() {
//     const editableStyle = {
//         width: '794px',
//         height: '1123px',
//         fontFamily: 'Calibri, Arial, sans-serif',
//         color: 'white',
//     };

//     return (
//         <div className="w-full bg-zinc-900 min-h-screen">
//             <div
//                 className="mx-auto my-10 shadow-lg p-[60px_80px] font-sans text-base relative overflow-auto"
//                 style={editableStyle}
//                 contentEditable
//                 suppressContentEditableWarning
//             >
//                 <p>Hello</p>
//                 {/* Content is editable. You can extend this with a rich text toolbar or formatting buttons. */}
//             </div>
//         </div>
//     );
// }

// export default Blank;

//3rd
// import { useState } from 'react';

// function Blank() {
//     const [fontSize, setFontSize] = useState(16);
//     const [fontFamily, setFontFamily] = useState('Calibri');

//     const handleFontSizeChange = (delta) => {
//         setFontSize((prevSize) => Math.max(10, prevSize + delta)); // min 10px
//     };

//     const handleFontFamilyChange = (e) => {
//         setFontFamily(e.target.value);
//     };

//     const editableStyle = {
//         width: '794px',
//         height: '1123px',
//         fontFamily: fontFamily,
//         fontSize: `${fontSize}px`,
//         color: 'white',
//     };

//     return (
//         <div className="w-full bg-zinc-900 min-h-screen p-4">
//             {/* Toolbar */}
//             <div className="flex justify-center items-center gap-4 mb-6 text-white">
//                 <button
//                     onClick={() => handleFontSizeChange(-2)}
//                     className="bg-zinc-700 px-4 py-1 rounded hover:bg-zinc-600"
//                 >
//                     A-
//                 </button>
//                 <span className="text-lg">Font Size: {fontSize}px</span>
//                 <button
//                     onClick={() => handleFontSizeChange(2)}
//                     className="bg-zinc-700 px-4 py-1 rounded hover:bg-zinc-600"
//                 >
//                     A+
//                 </button>

//                 <select
//                     value={fontFamily}
//                     onChange={handleFontFamilyChange}
//                     className="bg-zinc-700 text-white px-3 py-1 rounded"
//                 >
//                     <option value="Calibri">Calibri</option>
//                     <option value="Arial">Arial</option>
//                     <option value="Times New Roman">Times New Roman</option>
//                     <option value="Georgia">Georgia</option>
//                     <option value="Courier New">Courier New</option>
//                 </select>
//             </div>

//             {/* Editable Area */}
//             <div
//                 className="mx-auto shadow-lg p-[60px_80px] font-sans text-base relative overflow-auto bg-zinc-800"
//                 style={editableStyle}
//                 contentEditable
//                 suppressContentEditableWarning
//             >
//                 <p>Hello</p>
//                 {/* Start editing this document. Font and size controls are above. */}
//             </div>
//         </div>
//     );
// }

// export default Blank;

//4th 
// import { useState } from 'react';

// function Blank() {
//     const [fontSize, setFontSize] = useState(16);
//     const [fontFamily, setFontFamily] = useState('Calibri');
//     const [fullWindow, setFullWindow] = useState(false);

//     const handleFontSizeChange = (delta) => {
//         setFontSize((prev) => Math.max(10, prev + delta));
//     };

//     const handleFontFamilyChange = (e) => {
//         setFontFamily(e.target.value);
//     };

//     const toggleFullWindow = () => {
//         setFullWindow((prev) => !prev);
//     };

//     const editableStyle = {
//         fontFamily,
//         fontSize: `${fontSize}px`,
//         color: 'white',
//         width: fullWindow ? '100%' : '794px',
//         height: fullWindow ? '100vh' : '1123px',
//     };

//     return (
//         <div className="w-full bg-zinc-900 min-h-screen p-4">
//             {/* Toolbar */}
//             <div className="flex flex-wrap justify-center items-center gap-4 mb-6 text-white">
//                 <button
//                     onClick={() => handleFontSizeChange(-2)}
//                     className="bg-zinc-700 px-4 py-1 rounded hover:bg-zinc-600"
//                 >
//                     A-
//                 </button>
//                 <span className="text-lg">Font Size: {fontSize}px</span>
//                 <button
//                     onClick={() => handleFontSizeChange(2)}
//                     className="bg-zinc-700 px-4 py-1 rounded hover:bg-zinc-600"
//                 >
//                     A+
//                 </button>

//                 <select
//                     value={fontFamily}
//                     onChange={handleFontFamilyChange}
//                     className="bg-zinc-700 text-white px-3 py-1 rounded"
//                 >
//                     <option value="Calibri">Calibri</option>
//                     <option value="Arial">Arial</option>
//                     <option value="Times New Roman">Times New Roman</option>
//                     <option value="Georgia">Georgia</option>
//                     <option value="Courier New">Courier New</option>
//                 </select>

//                 <button
//                     onClick={toggleFullWindow}
//                     className="bg-blue-600 px-4 py-1 rounded hover:bg-blue-500"
//                 >
//                     {fullWindow ? 'A4 Mode' : 'Full Window'}
//                 </button>
//             </div>

//             {/* Editable Area */}
//             <div
//                 className="mx-auto shadow-lg p-[60px_80px] font-sans relative overflow-auto bg-zinc-800"
//                 style={editableStyle}
//                 contentEditable
//                 suppressContentEditableWarning
//             >
//                 <p>Hello</p>
//                 {/* Editable content goes here */}
//             </div>
//         </div>
//     );
// }

// export default Blank;


//5th
import { useEffect, useRef, useState } from 'react';


function Blank() {
    const editorRef = useRef<HTMLDivElement | null>(null);
    const [fontSize, setFontSize] = useState<number>(16);
    const [fontFamily, setFontFamily] = useState<string>('Calibri');
    const [fullWindow, setFullWindow] = useState<boolean>(false);

    // Load content from localStorage on first render
    useEffect(() => {
        const savedContent = localStorage.getItem('editorContent');
        if (savedContent && editorRef.current) {
            editorRef.current.innerHTML = savedContent;
        }
    }, []);

    // Save content to localStorage whenever user types
    const handleInput = () => {
        if (editorRef.current) {
            localStorage.setItem('editorContent', editorRef.current.innerHTML);
        }
    };

    const toggleFullWindow = () => {
        setFullWindow((prev) => !prev);
    };

    useEffect(() => {
        document.body.style.overflow = fullWindow ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [fullWindow]);

    const handleFontSizeChange = (delta: number) => {
        setFontSize((prev) => Math.max(10, prev + delta));
    };

    const handleFontFamilyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFontFamily(e.target.value);
    };

    const editableStyle: React.CSSProperties = {
        fontFamily,
        fontSize: `${fontSize}px`,
        color: 'white',
        width: fullWindow ? '100vw' : '794px',
        height: fullWindow ? '100vh' : '1123px',
        position: fullWindow ? 'fixed' : 'static',
        top: fullWindow ? 0 : 'auto',
        left: fullWindow ? 0 : 'auto',
        zIndex: fullWindow ? 40 : 'auto',
        backgroundColor: '#18181b',
        overflow: 'auto',
        padding: '60px 80px',
    };

    return (
       
        <div className="w-full bg-zinc-900 min-h-screen p-4">
            {/* Toolbar */}
            {!fullWindow && (
                <div className="flex flex-wrap justify-center items-center gap-4 mb-6 text-white">
                    <button
                        onClick={() => handleFontSizeChange(-2)}
                        className="bg-zinc-700 px-4 py-1 rounded hover:bg-zinc-600"
                    >
                        A-
                    </button>
                    <span className="text-lg">Font Size: {fontSize}px</span>
                    <button
                        onClick={() => handleFontSizeChange(2)}
                        className="bg-zinc-700 px-4 py-1 rounded hover:bg-zinc-600"
                    >
                        A+
                    </button>

                    <select
                        value={fontFamily}
                        onChange={handleFontFamilyChange}
                        className="bg-zinc-700 text-white px-3 py-1 rounded"
                    >
                        <option value="Calibri">Calibri</option>
                        <option value="Arial">Arial</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Courier New">Courier New</option>
                    </select>

                    <button
                        onClick={toggleFullWindow}
                        className="bg-blue-600 px-4 py-1 rounded hover:bg-blue-500"
                    >
                        Full Window
                    </button>
                </div>
            )}

            {/* Exit Full Mode Button */}
            {fullWindow && (
                <button
                    onClick={toggleFullWindow}
                    className="fixed top-4 right-4 bg-red-600 px-3 py-1 rounded text-white z-50 hover:bg-red-500"
                >
                    Exit Full
                </button>
            )}

            {/* Editable Area */}
            <div
                ref={editorRef}
                onInput={handleInput}
                className={`${!fullWindow ? 'mx-auto' : ''} shadow-lg font-sans relative bg-zinc-800`}
                style={editableStyle}
                contentEditable
                suppressContentEditableWarning
            >
                <p>Hello</p>
            </div>
        </div>
    );
}

export default Blank;
