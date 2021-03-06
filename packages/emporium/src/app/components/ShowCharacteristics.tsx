import React from 'react';
import { connect } from 'react-redux';
import { Button, Row } from 'reactstrap';
import { chars } from '@emporium/data';
import * as images from '@emporium/images';
import { characteristics } from '@emporium/selectors';
import { Characteristics } from './Characteristics';

class ShowCharacteristicsComponent extends React.Component<any, any> {
    public state = { modal: false };

    public render() {
        const { characteristics, theme } = this.props;
        return (
            <div>
                <Row className="justify-content-end">
                    <div className={`header header-${theme}`}>
                        CHARACTERISTICS
                    </div>
                    <Button
                        color="link"
                        className="noUnderLine p-0"
                        onClick={() => this.setState({ modal: true })}
                    >
                        ⚙
                    </Button>
                </Row>
                <hr />
                <Row className="justify-content-center">
                    {chars.map(stat => (
                        <div className={`imageBox characteristic characteristic-${stat}`} key={stat}>
                            <img
                                src={images[theme][stat]}
                                alt=""
                                className="svg"
                            />
                            <Row
                                className={`characteristicValue characteristicValue-${theme}`}
                            >
                                {characteristics[stat]}
                            </Row>
                        </div>
                    ))}
                </Row>
                <Characteristics
                    modal={this.state.modal}
                    handleClose={() => this.setState({ modal: false })}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        characteristics: characteristics(state),
        theme: state.theme
    };
};

export const ShowCharacteristics = connect(mapStateToProps)(
    ShowCharacteristicsComponent
);
