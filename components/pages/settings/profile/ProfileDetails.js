import { Form, FormRow } from 'react-basics';
import { useIntl } from 'react-intl';
import TimezoneSetting from 'components/pages/settings/profile/TimezoneSetting';
import DateRangeSetting from 'components/pages/settings/profile/DateRangeSetting';
import LanguageSetting from 'components/pages/settings/profile/LanguageSetting';
import ThemeSetting from 'components/pages/settings/profile/ThemeSetting';
import useUser from 'hooks/useUser';
import { labels } from 'components/messages';

export default function ProfileDetails() {
  const { user } = useUser();
  const { formatMessage } = useIntl();

  if (!user) {
    return null;
  }

  const { username, role } = user;

  return (
    <Form>
      <FormRow label={formatMessage(labels.username)}>{username}</FormRow>
      <FormRow label={formatMessage(labels.role)}>{role}</FormRow>
      <FormRow label={formatMessage(labels.defaultDateRange)}>
        <DateRangeSetting />
      </FormRow>
      <FormRow label={formatMessage(labels.language)}>
        <LanguageSetting />
      </FormRow>
      <FormRow label={formatMessage(labels.timezone)}>
        <TimezoneSetting />
      </FormRow>
      <FormRow label={formatMessage(labels.theme)}>
        <ThemeSetting />
      </FormRow>
    </Form>
  );
}