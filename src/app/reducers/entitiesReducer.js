import {createReducer} from "common/utils/reducerUtils";

import orm from "app/orm"

import {DATA_LOADED} from "features/tools/toolConstants";


const initialState = orm.getEmptyState()

export function loadData(state, payload) {

    const session = orm.session(state);

    const {Pilot, MechDesign, Mech} = session;

    const {pilots, designs, mechs} = payload;

    // Insert the data entries into the Session
    pilots.forEach(pilot => Pilot.parse(pilot));
    designs.forEach(design => MechDesign.parse(design));
    mechs.forEach(mech => Mech.parse(mech));

    return session.state;
}

export default createReducer(initialState, {
    [DATA_LOADED] : loadData
});