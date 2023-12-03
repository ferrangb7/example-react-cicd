import { Routes, Route } from 'react-router-dom';
import { Banner } from '../components/Banner';
import { Search } from '../components/Search';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Banner /> } />
                <Route path="/search" element={ <Search /> } />
            </Routes>
        </>
    )
};
