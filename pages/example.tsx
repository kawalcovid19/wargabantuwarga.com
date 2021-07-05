type Props = {
    html: string
    css: string
}

export default function Example(props: Props) {
    return (
        <>
            <style dangerouslySetInnerHTML={{__html: props.css}}/>
            <div dangerouslySetInnerHTML={{__html: props.html}}>
            </div>
        </>
    );
}

Example.getInitialProps = async () => {
    const data = require('../data/wbw.json')
    return {html: data.html, css: data.css}
}
