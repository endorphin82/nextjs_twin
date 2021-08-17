import tw from "twin.macro";
import {Button} from '../components/Button'
import {Logo} from '../components/Logo'

export default function Home() {
    return (
        <>
            <h1 css={tw`p-4 text-4xl font-bold`}>
                Next.js + twin.macro + Typescript
            </h1>
            <div>
                <Button variant="primary">Submit</Button>
                <Button variant="secondary">Cancel</Button>
                <Button isSmall>Close</Button>
                <Logo/>
            </div>
        </>
    );
}
