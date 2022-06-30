import './JobNotification.css';
import React from 'react';

function JobNotification() {
  const [isAgree, setIsAgree] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(true);

  const handlerCheckbox = (evt) => {
    const {checked} = evt.target;
    setIsAgree(checked);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    setIsOpen(false);
  };

  return (
    <section onSubmit={onSubmit} className={`job-notification ${isOpen ? 'job-notification_opened' : 'job-notification_closed'}`}>
      <div className='job-notification__container'>
        <div className='job-notification__text-block'>
          <h1 className='job-notification__title'>Есть небольшая проблема &#128533;</h1>
          <p className='job-notification__description'>
            К сожалению, api сервис, откуда пользователь получает информацию с новостными карточками после ввода поиска, стал платным.
          </p>
          <p className='job-notification__description'>
            Если у Вас есть желание протестить сервис "на полную", необходимо скачать архив локально, и, запросы с localhost <a href='https://newsapi.org/pricing' target='_blank' className=''>NewsApi</a>, будет возвращать ответ без 426 ошибки. Ссылка на репозиторий в футере.
          </p>
        </div>
        <form className='job-notification__form'>
          <div className='job-notification__checkbox-block' >
            <input onChange={handlerCheckbox} className='job-notification__checkbox' id="im_agree" type="checkbox" />
            <label className='job-notification__label-checkbox' htmlFor="im_agree">Мне всё ясно.</label>
          </div>
          <button
            type='submit'
            className='job-notification__btn-submit'
            disabled={!isAgree}
          >Продолжить</button>
        </form>
      </div>
    </section>
  );
}

export default JobNotification;