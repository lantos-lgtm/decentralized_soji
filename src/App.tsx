
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
// import { MoralisProvider } from 'react-moralis';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ElevatedAppBar from './components/ElevatedAppBar';
import UploadSoji from './components/SojiUpload/UploadSojiBox';
import { store } from './services/store';
import { SearchSounds } from './Views/SearchSojis';





// this app entry is not the best just throwing things together to get a prototype...
// App
//     App bar
//       logo
//       login
//       Search
//       Upload
//     Results

// App Loaded
// getSojis()
//     for each soji
//      Load soji from IPFS
//      Render soji
// userChanges opens Soji upload
//     onChange -> dispatch -> update State
//     onChange(image | audio) -> dispatch -> readFileData -> update State
//     onSubmit -> dispatch -> uploadToIPFS -> initiateContract

// declare global window.ethereum
declare global {
    interface Window {
        ethereum: any;
    }
}

function App() {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            // mode: 'dark',
        },
    });

    return <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    <Container style={{
                        width: "100%",
                        height: "100%",
                    }}>
                        <ElevatedAppBar />
                        <Routes>
                            <Route path="/" element={<></>}></Route>
                            <Route path="/uploadSound" element={<UploadSoji />} ></Route>
                        </Routes>
                        <SearchSounds />
                    </Container>
                </ThemeProvider>
            </BrowserRouter>
        {/* </MoralisProvider> */}

    </Provider>
}

export default App;
