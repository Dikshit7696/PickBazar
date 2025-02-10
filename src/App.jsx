// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Groceries from './components/Groceries'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fruits from './components/Fruits';
import Vegetables from './components/Vegetables';
import FruitsVegetables from './components/FruitsVegetables';
import MeatFish from './components/MeatFish';
import Fish from './components/Fish';
import Meat from './components/Meat';
import Snacks from './components/Snacks';
import NutsBiscuits from './components/NutsBiscuits';
import Chocolates from './components/Chocolates';
import Crisps from './components/Crisps';
import NoodlesPasta from './components/NoodlesPasta';
import Sauce from './components/Sauce';
import PetCare from './components/PetCare';
import CatFood from './components/CatFood';
import DogFood from './components/DogFood';
import Accessories from './components/Accessories';
import HomeCleaning from './components/HomeCleaning';
import AirFreshner from './components/AirFreshner';
import CleaningProducts from './components/CleaningProducts';
import KitchenAccessories from './components/KitchenAccessories';
import Laundry from './components/Laundry';
import Dairy from './components/Dairy';
import Milk from './components/Milk';
import Butter from './components/Butter';
import Egg from './components/Egg';
import Yogurt from './components/Yogurt';
import Cooking from './components/Cooking';
import Oil from './components/Oil';
import Rice from './components/Rice';
import SaltSugar from './components/SaltSugar';
import Spices from './components/Spices';
import Breakfast from './components/Breakfast';
import Bread from './components/Bread';
import Cereal from './components/Cereal';
import Jam from './components/Jam';
import Beverage from './components/Beverage';
import Coffee from './components/Coffee';
import EnergyDrinks from './components/EnergyDrinks';
import Juice from './components/Juice';
import FizzyDrinks from './components/FizzyDrinks';
import Tea from './components/Tea';
import HealthBeauty from './components/HealthBeauty';
import Bath from './components/Bath';
import Cream from './components/Cream';
import Deodrant from './components/Deodrant';
import FaceCare from './components/FaceCare';
import OralCare from './components/OralCare';
import Shaving from './components/Shaving';
import Shops from './components/Shops';
import Offers from './components/Offers';
import Contact from './components/Contact';
import FlashSale from './components/FlashSale';
import Manufactures from './components/Manufactures';
import Authors from './components/Authors';
import FAQ from './components/FAQ';
import Terms from './components/Terms';
import Customer from './components/Customer';
import Vendor from './components/Vendor';
import Login from './components/Join';
import Register from './components/Register';
// import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <>
      <Router>
        {/* <ScrollToTop /> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Groceries />} />
          <Route path='/fruits' element={<Fruits />} />
          <Route path='/vegetables' element={<Vegetables />} />
          <Route path='/fruitsvegetables' element={<FruitsVegetables />} />
          <Route path='/meat&fish' element={<MeatFish />} />
          <Route path='/fish' element={<Fish />} />
          <Route path='/meat' element={<Meat />} />
          <Route path='/snacks' element={<Snacks />} />
          <Route path='/nuts&biscuits' element={<NutsBiscuits />} />
          <Route path='/chocolates' element={<Chocolates />} />
          <Route path='/crisps' element={<Crisps />} />
          <Route path='/noodles&pasta' element={<NoodlesPasta />} />
          <Route path='/sauce' element={<Sauce />} />
          <Route path='/petcare' element={<PetCare />} />
          <Route path='/catfood' element={<CatFood />} />
          <Route path='/dogfood' element={<DogFood />} />
          <Route path='/accessories' element={<Accessories />} />
          <Route path='/home&cleaning' element={<HomeCleaning />} />
          <Route path='/airfreshner' element={<AirFreshner />} />
          <Route path='/cleaning' element={<CleaningProducts />} />
          <Route path='/kitchen' element={<KitchenAccessories />} />
          <Route path='/laundary' element={<Laundry />} />
          <Route path='/dairy' element={<Dairy />} />
          <Route path='/milk' element={<Milk />} />
          <Route path='/butter' element={<Butter />} />
          <Route path='/egg' element={<Egg />} />
          <Route path='/yogurt' element={<Yogurt />} />
          <Route path='/cooking' element={<Cooking />} />
          <Route path='/oil' element={<Oil />} />
          <Route path='/rice' element={<Rice />} />
          <Route path='/slat&sugar' element={<SaltSugar />} />
          <Route path='/spices' element={<Spices />} />
          <Route path='/breakfast' element={<Breakfast />} />
          <Route path='/bread' element={<Bread />} />
          <Route path='/cereal' element={<Cereal />} />
          <Route path='/jam' element={<Jam />} />
          <Route path='/beverage' element={<Beverage />} />
          <Route path='/coffee' element={<Coffee />} />
          <Route path='/energy' element={<EnergyDrinks />} />
          <Route path='/juice' element={<Juice />} />
          <Route path='/beverage' element={<Beverage />} />
          <Route path='/fizzy' element={<FizzyDrinks />} />
          <Route path='/tea' element={<Tea />} />
          <Route path='/health&beauty' element={<HealthBeauty />} />
          <Route path='/bath' element={<Bath />} />
          <Route path='/cream' element={<Cream />} />
          <Route path='/deodorant' element={<Deodrant />} />
          <Route path='/face' element={<FaceCare />} />
          <Route path='/oral' element={<OralCare />} />
          <Route path='/shaving' element={<Shaving />} />
          <Route path='/shops' element={<Shops />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/flash' element={<FlashSale />} />
          <Route path='/manufactures' element={<Manufactures />} />
          <Route path='/authors' element={<Authors />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/customer' element={<Customer />} />
          <Route path='/vendor' element={<Vendor />} />
          <Route path='/join' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App