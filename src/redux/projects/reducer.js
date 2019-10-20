import PROJECT_ACTIONS from './actions';

const defaultState = {
  data: [
    {
      id: 1,
      title: 'First Project',
      key: 'FRS',
      type: 'Classic Software',
      starred: true,
      updated_at: 1,
      lead: {
        id: 1,
      }
    },
    {
      id: 2,
      title: 'Second Project',
      key: 'SPJ',
      starred: false,
      type: 'Classic Software',
      updated_at: 2,
      lead: {
        id: 1,
      }
    },
    {
      id: 3,
      title: 'Third Project',
      key: 'TRD',
      starred: true,
      type: 'Classic Software',
      updated_at: 4,
      lead: {
        id: 1,
      }
    },
    {
      id: 4,
      title: 'Forth Project',
      key: 'FRT',
      starred: false,
      type: 'Classic Software',
      updated_at: 3,
      lead: {
        id: 1,
      }
    },
    {
      id: 5,
      title: 'Fifth Project',
      key: 'FFT',
      starred: false,
      type: 'Classic Software',
      updated_at: 5,
      lead: {
        id: 1,
      }
    }
  ],
};

export default function projectReducer(state = defaultState, action) {
  const {type, payload} = action;

  switch (type) {
    case PROJECT_ACTIONS.GET_PROJECTS_INFO : {
      return {...state}
    }
    default:
      return state;
  }
}