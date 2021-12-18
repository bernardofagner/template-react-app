import { About } from './About';
import { connect } from 'react-redux';
import { ReduxDataStatus } from '../../common/types/redux/Redux';
import { setInfoAboutRedux, setInfoStatusRedux } from './redux';

const mapStateToProps = ({ about }: any) => {
    return {
        infoAbout: about.infoAboutRedux,
        infoStatus: about.infoStatusRedux
    };
};

const mapDispatchToProps = {
    setInfoAbout: (infoAboutRedux: string) => setInfoAboutRedux(infoAboutRedux),
    setInfoStatus: (reduxStatus: ReduxDataStatus) => setInfoStatusRedux(reduxStatus)
};

const AboutConnected = connect(mapStateToProps, mapDispatchToProps)(About);

export { AboutConnected as About };