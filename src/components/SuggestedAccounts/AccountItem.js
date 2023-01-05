import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (prop) => {
        return (
            <div tabIndex="-1" {...prop}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview />
                    </div>
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive placement="bottom" offset={[-20, 0]} delay={[800, 0]} render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="data:image/jpeg;base64,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"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>quocnguyenpohu</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>quoc nguyen pohu</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
