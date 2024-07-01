import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div  className="flex flex-col gap-12">
      <div id="searchcomp" className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-green-600">
        Endless Cravings. Delivered Fast.
        </h1>
        <span className="text-xl">Food at our Fingertips!</span>
        
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />

      
<div className="flex flex-col items-center justify-center gap-5 md:flex-row  py-4">
      <Button
          onClick={()=>{navigate('/search/delhi')}}
          type="button"
          variant="outline"
          className="rounded-full bg-green-100 "
        >
          Delhi
        </Button>
      <Button
          onClick={()=>{navigate('/search/mumbai')}}
          type="button"
          variant="outline"
          className="rounded-full bg-green-100  "
        >
          Mumbai
        </Button>
      <Button
          onClick={()=>{navigate('/search/bangalore')}}
          type="button"
          variant="outline"
          className="rounded-full bg-green-100"
        >
          Bangalore
        </Button>
      <Button
          onClick={()=>{navigate('/search/jaipur')}}
          type="button"
          variant="outline"
          className="rounded-full bg-green-100"
        >
          Jaipur
        </Button>
      </div>

      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the INEFoods App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
