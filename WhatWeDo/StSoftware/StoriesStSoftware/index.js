
import TypicalSuccessfulStories from '../../../TypicalSuccessfulStories';
import { StoriesContainer, StoriesFluid, StoriesTitleH2, StoriesTitleH3, StoriesTitleWrapper } from './stye';

const StoriesStSoftware = ({ storiesTitle, storiesDesc }) => {

  return (
    <StoriesFluid className='container-fluid'>
      <StoriesContainer className='container'>
        <StoriesTitleWrapper className='row'>
          <StoriesTitleH2>{storiesTitle}</StoriesTitleH2>
          <StoriesTitleH3>{storiesDesc}</StoriesTitleH3>
        </StoriesTitleWrapper>
        <TypicalSuccessfulStories/>
      </StoriesContainer>
    </StoriesFluid >
  )
}

export default StoriesStSoftware