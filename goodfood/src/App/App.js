import { ConfigProvider } from "antd";
import UserContextProvider  from "../Utils/providers/UserContext";
import { VirtuesContextProvider } from '../Utils/providers/VirtuesProvider';
import { RecipesContextProvider } from "../Utils/providers/RecipesProvider";

import { Routes ,Route } from "react-router-dom";

import MenuHeader from "../MenuHeader/MenuHeader";
import HomePage from "../HomePage/HomePage";
import Recipe from "../Recipe/Recipe"
import LegalNotice from "../LegalNotice/LegalNotice";
import Contact from "../Contact/Contact";
import AddRecipe from "../AddRecipe/AddRecipe";
import Profile from "../Profile/Profile"
import Virtue from "../RecipeVirtue/RecipeVirtue"
import RecipeCategory from "../RecipeCategory/RecipeCategory";
import RegisterPage from "../RegisterPage/RegisterPage";
import LoginPage from '../LoginPage/LoginPage'
import Footer from "../Footer/Footer";

import RequireAuth from "../Utils/ProtectedRoutes/RequireAuth";
import RequireGuest from "../Utils/ProtectedRoutes/RequireGuest";

import './App.css';

function App() { 
  
  return (
    
    <div className="App">
      <UserContextProvider>
      <VirtuesContextProvider>
      <RecipesContextProvider>
      <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#faad14',
              },
            }}
          >
            
      <MenuHeader/>
        <div className="content">    
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/recipe/:id" element={<Recipe/>}/>
              <Route path="/categorie/:categoryname" element={<RecipeCategory/>}/>
              <Route path="/vertue/:virtuename" element={<Virtue/>}/>
              <Route path="/mentionslegales" element={<LegalNotice/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route element={<RequireGuest/>}>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
              </Route>
              <Route element={<RequireAuth/>}>
                <Route exact path='/profile' element={<Profile/>} />
                <Route path="/recipe/add" element={<AddRecipe/>}/>
              </Route>
            </Routes>
        </div>
      <Footer/>
      </ConfigProvider>
      </RecipesContextProvider>
      </VirtuesContextProvider>
      </UserContextProvider>
    </div>
    
    
  );
}

export default App;
