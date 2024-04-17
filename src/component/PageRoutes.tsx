import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JuicyAdventure from '../pages/JuicyAdventure';
import NotFound from '../pages/NotFound';
const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/juicyadventure" element={<JuicyAdventure />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};
export default PageRoutes;