import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from './components'

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route
                path='/'
                element={
                    <>
                        <Box variant='h1'>Heading 1</Box>
                        <Box variant='h2'>Heading 2</Box>
                        <Box variant='h3'>Heading 3</Box>
                        <Box variant='h4'>Heading 4</Box>
                        <Box variant='h5'>Heading 5</Box>
                        <Box variant='p'>Normal text</Box>
                        <Box margin={{ b: 'xs' }}></Box>
                        <Box variant='sub'>Subscript text</Box>
                    </>
                }
            />
        </Routes>
    </BrowserRouter>
)

export default App
