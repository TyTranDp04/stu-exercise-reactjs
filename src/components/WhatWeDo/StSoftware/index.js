import BannerStSoftware from "./BannerStSoftware";
import CategoriesStSoftWare from "./CategoriesStSoftware";
import { ContainerFluid } from "./CategoriesStSoftware/style";
import StoriesStSoftware from "./StoriesStSoftware";


const StSoftWare = () => {
  
  const bannerTitle = 'ST SOFTWARE';
  const bannerDesc = 'WE OFFER A WEALTH OF SERVICES TO ADDRESS YOUR TECHNOLOGY NEEDS.';
  const storiesTitle = 'Typical successful stories';
  const storiesDesc = 'Meeting deadlines and ensuring high standards are our style of life. 82% of our customers have chosen our team for their 2nd project.';
  
  return (
    <ContainerFluid style={{padding: '0'}}>
      <BannerStSoftware
      bannerTitle={bannerTitle}
      bannerDesc={bannerDesc}
      />
      <CategoriesStSoftWare />
      <StoriesStSoftware
      storiesTitle={storiesTitle}
      storiesDesc={storiesDesc}
      />
    </ContainerFluid>
  )
}

export default StSoftWare