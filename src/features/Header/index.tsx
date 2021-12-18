import { Header } from './Header';
import { connect } from 'react-redux';
import { ReduxDataStatus } from '../../common/types/redux/Redux';

const mapStateToProps = ({ header }: any) => {
    return {
        
    };
};

const mapDispatchToProps = {

};

const HeaderConnected = connect(mapStateToProps, mapDispatchToProps)(Header);

export { HeaderConnected as Header };