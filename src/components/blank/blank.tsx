import { useEffect, useRef, useState } from 'react';

function Blank() {
    const editorRef = useRef<HTMLDivElement | null>(null);
    const [fontSize, setFontSize] = useState<number>(16);
    const [fontFamily, setFontFamily] = useState<string>('Calibri');
    const [fullWindow, setFullWindow] = useState<boolean>(false);
    const [bgColor, setBgColor] = useState<string>('#18181b');
    const [textColor, setTextColor] = useState<string>('white');

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

    const handleBgColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBgColor(e.target.value);
    };

    const handleTextColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextColor(e.target.value);
    };

    const editableStyle: React.CSSProperties = {
        fontFamily,
        fontSize: `${fontSize}px`,
        color: textColor,
        backgroundColor: bgColor,
        width: fullWindow ? '100vw' : '794px',
        height: fullWindow ? '100vh' : '1123px',
        position: fullWindow ? 'fixed' : 'static',
        top: fullWindow ? 0 : 'auto',
        left: fullWindow ? 0 : 'auto',
        zIndex: fullWindow ? 40 : 'auto',
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

                    <label className="text-sm">
                        BG Color:
                        <input type="color" value={bgColor} onChange={handleBgColorChange} className="ml-2" />
                    </label>

                    <label className="text-sm">
                        Text Color:
                        <input type="color" value={textColor} onChange={handleTextColorChange} className="ml-2" />
                    </label>

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
                className={`${!fullWindow ? 'mx-auto' : ''} shadow-lg font-sans relative`}
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
