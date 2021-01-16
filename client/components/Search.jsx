import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default () => {
  const [zipcode, setZipCode] = useState('90210');
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    console.log('zipcode:', zipcode);
  }, [zipcode]);

  return (
    <div className="nav-item">
      <div>
        <form onSubmit={handleSubmit((val) => setZipCode(val.zip))}>
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
};
