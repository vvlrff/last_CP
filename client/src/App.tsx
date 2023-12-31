import {
    Route,
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import FileUploadPage from "./pages/UploadPage/UploadPage";
import ResultPage from "./pages/ResultPage/ResultPage";
import InputPage from "./pages/InputPage/InputPage";
import MapPage from "./pages/MapPage/MapPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="input" element={<InputPage />} />
            <Route path="map" element={<MapPage />} />
            <Route path="upload" element={<FileUploadPage />} />
            <Route path="result" element={<ResultPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
