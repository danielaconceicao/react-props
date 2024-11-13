import imageReact from '../assets/react.svg'

export default function AppHeader(){
    return(
        <header>
            <img src={imageReact} alt="" />
            <h1>React Blog Posts</h1>
        </header>
    )
}