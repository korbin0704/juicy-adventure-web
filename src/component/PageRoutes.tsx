import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JuicyAdventure from '../pages/JuicyAdventure';
const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/juicyadventure" element={<JuicyAdventure />} />
            </Routes>
        </BrowserRouter>
    );
};
export default PageRoutes;