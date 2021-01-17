import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';

import { DataContext } from '../store/DataContext';

export default function Search({ setZip }) {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useContext(DataContext);

  return (
    <div className="nav-item">
      <div>
        <form onSubmit={handleSubmit((val) => setZip(val.zip))}>
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
