import React from 'react';
import { useDispatch } from 'react-redux';
import * as action from '../redux/actions/actions';
import { useForm } from 'react-hook-form';

export default function Search() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  return (
    <div className="nav-item">
      <div>
        <form
          onSubmit={handleSubmit((val) =>
            dispatch(action.setNewLocation(val.zip))
          )}
        >
          <label htmlFor="zip">
            Zipcode:
            <input
              id="zip"
              name="zip"
              type="text"
              placeholder="90210"
              ref={register}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
