type Props = {
    html: string
}

export default function Example(props: Props) {
    return (
        <div dangerouslySetInnerHTML={{__html: props.html}}>
        </div>
    );
}

Example.getInitialProps = async () => {
    const data = require('../data/wbw.json')
    return {html: data.html}
}
