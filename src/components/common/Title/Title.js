import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Title = styled.h1`
    font-size: 18px;
    font-weight: bolder;
`;

Title.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Title;
