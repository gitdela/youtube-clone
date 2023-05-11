import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  NavBar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from './Components';

const App = () => (
  // the browser router tag helps route the whole app
  <BrowserRouter>
    {/* here we are using the material ui box to wrap the components */}
    <Box sx={{ backgroundColor: '#000', color: '#fff' }}>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:SearchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
