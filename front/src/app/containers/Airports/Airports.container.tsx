import { connect } from 'react-redux';

import { RootStore } from '@app/redux/combined';
import { Airport } from '@app/types/airports';
import { Airports } from '@app/components/Airports/Airports';
import { getData, setPerPageCount } from '@app/redux/actions/airports/airports';

interface MapStateToProps {
  airports?: Airport[];
  isPending: boolean;
  totalResults?: number;
  currentPage: number;
  dataPerPage: number;
}

const mapStateToProps = (state: RootStore): MapStateToProps => ({
  airports: state.airports.airports,
  isPending: state.airports.isPending,
  totalResults: state.airports.totalResults,
  currentPage: state.airports.currentPage,
  dataPerPage: state.airports.dataPerPage,
});

const mapDispatchToProps = {
  getData,
  setPerPageCount,
};

type MapDispatchToProps = typeof mapDispatchToProps;

export const AirportsContainer = connect<MapStateToProps, MapDispatchToProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Airports);
