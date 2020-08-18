import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {ShowAlert} from '../components';

export default function advices() {
  const notify = () => ShowAlert('success', "❌ Թեստ");
  return (
    <div>
      <button onClick={notify}>Notify !</button>
    </div>
  )
}

