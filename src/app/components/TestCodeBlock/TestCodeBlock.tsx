import './TestCodeBlock.scss'

export default function TestCodeBlock({ ...props }) {
    const { codestring } = props

    // function onCopyClick() {
    //     navigator.clipboard.writeText(codestring)
    // }

    return (
        <div className='test-code-block'>
            <a title="Copy to Clipboard" >
                <i className="icon-copy"></i>
            </a>
            <div className="code-block">
                {codestring}
            </div>
        </div>
    )
}