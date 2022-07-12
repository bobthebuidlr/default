import useStore from './stores'

const App = () => {
    const test = useStore((s) => s.test)
    return (
        <div>
            App
            <ul>
                <li>{test}</li>
            </ul>
        </div>
    )
}

export default App
