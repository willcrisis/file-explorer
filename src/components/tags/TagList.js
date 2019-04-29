import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import Title from '../common/Title/Title';
import Tag from './Tag';
import Hamburger from '../images/hamburger.svg';
import Left from '../images/left.svg';

const SIZE_LIMIT = '446px';

const Container = styled.div`
    flex: 1;
    padding: 10px;
    
    @media (max-width: ${SIZE_LIMIT}) {
        margin-left: ${({ expanded }) => expanded ? 0 : '-221px'};
        transition: margin-left 0.5s;
        position: absolute;
        background-color: #fff;
        width: 200px;
        border-right: solid 1px #000;
    }
`;

const Button = styled.div`
    width: 35px;
    height: 35px;
    margin: 10px;
    cursor: pointer;

    &:hover {
        background-color: #ddd;
        border-radius: 6px;
    }
`;

const ToggleButton = styled(Button)`
    @media (min-width: ${SIZE_LIMIT}) {
        display: none;
    }
`;

const Image = styled.img`
    width: 35px;
`;

const ExpandButton = ({ onClick }) => (
    <ToggleButton onClick={onClick}>
        <Image src={Hamburger} alt="Tags" />
    </ToggleButton>
);
ExpandButton.displayName = 'ExpandButton';

const CloseButton = ({ onClick }) => (
    <ToggleButton onClick={onClick}>
        <Image src={Left} alt="Close" />
    </ToggleButton>
);

const handleTagSelect = (setExpanded, onSelect) => (tag) => {
    setExpanded(false);
    onSelect(tag);
}

const TagList = ({ data, onSelect }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Fragment>
            <ExpandButton onClick={() => setExpanded(true)} />
            <Container expanded={expanded}>
                <CloseButton onClick={() => setExpanded(false)} />
                <Title>Tags</Title>
                {data.map((tag) => (
                    <Tag
                        key={tag.tag}
                        tag={tag}
                        onClick={handleTagSelect(setExpanded, onSelect)}
                    />
                ))}
            </Container>
        </Fragment>
    );
};

TagList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            tag: PropTypes.string.isRequired,
            files: PropTypes.string.isRequired,
        })
    ).isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default TagList;