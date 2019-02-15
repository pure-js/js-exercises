// @flow
import React from 'react';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';

import Textarea from '../Textarea/Textarea';

import button from '../button.css';
import styles from './Form.css';

type Props = {
  userAnswer: void,
};

let data = '';

const getValue = (value: string): void => {
  data = value;
};

const UserAnswer = ({ userAnswer }: Props) => (
  <form>
    <div className={bootstrap['form-group']}>
      <label className={styles['console-label']} htmlFor="console-output">
        Web Console Output:
      </label>
      <div
        className={styles.console_icon}
      >
        {'>'}
      </div>
      <Textarea getInputValue={getValue} />
      <label>
        Enter key starting a new line.
        Please note that your input is case sensitive.
      </label>
    </div>
    <div
      className={`
        ${bootstrap['form-group']}
        ${bootstrap['btn-group']} 
      `}
    >
      <button
        id="answer"
        onClick={() => userAnswer(data)}
        type="button"
        className={`${bootstrap.btn} ${bootstrap['btn-info']} ${button.btn_cursor}`}
      >
        Answer
      </button>
      <button
        id="next-quiz"
        onClick={() => userAnswer(data)}
        type="button"
        className={`${bootstrap.btn} ${bootstrap['btn-light']} ${button.btn_cursor}`}
      >
        {'I don\'t know'}
      </button>
    </div>
  </form>
);

export default UserAnswer;
