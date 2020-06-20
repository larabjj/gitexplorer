export const secondaryOptions = {
  hresources: [
    {
      value: 'travels',
      label: 'Travel/Conferences',
      tool: 'How to properly report travel and conferences time and expenses.',
      usage: 'Lorem ipsum',
      nb: 'Everyone is entitled to participate in up to two conferences / camps a year at company expense. If conference takes place during a holiday and/or a weekend it will not be counted as a working day.\n\nFurther participation is possible at own expense or by separate arrangement with Baddy.'
    },
    {
      value: 'vacations',
      label: 'Vacation',
      tool: 'A vacation must be requested in writing by email.The vacation is confirmed only by a written confirmation.\n\nVacation requests must be made 6 weeks in advance.',
      usage: 'vacation@1xinternet.de',
      nb: 'Each employee is entitled to the number of days of vacation that have been set in his contract.\n\nVacation longer than 2 weeks have to be arranged separately and allowed.\n\n- Persons there are working with you in the same actual project\n\n- Persons with the same specification (Frontend, Backend, ..)\n\nAfter reviewing whether the requested vacation does not conflict with another date (for example, vacation of a team partner, important deadlines, etc), the vacation is confirmed in writing.\n\nVacation requests must be made 6 weeks in advance. Subsequent requests can not be considered because project planning has already taken place.\n\nIf already confirmed vacation are not perceived or desired to be postponed, this must also be communicated in writing to vacation@1xinternet.de'
    },
    {
      value: 'sick',
      label: 'Doctor appointment',
      tool: 'In the case of illness, information must be sent to the email by 9 am.',
      usage: 'sick@1xinternet.de',
      nb: 'From the third consecutive day of illness, a medical certificate (Krankenmeldung) will be required from the doctor.\n\nIf a doctor appointment is required during working hours, this appointment must also be announced to the email as well.'
    },
    {
      value: 'traveltime',
      label: 'Work in Conil',
      tool: 'Travel time is not working time.\n\nPlease, book your dates in the exel document.',
      usage: 'https://docs.google.com/spreadsheets/d/15SfJSjF0oO8B8r\n\nc7v2zqzEXnsWCRuVlALVeOOmiMGdk/edit?usp=sharing',
      nb: 'It is also possible to work from our office in Conil.\n\nEvery employee is allowed to travel to Conil at the expense of the company once per year.\n\nThe costs for the flight and free accommodation in the company apartment are covered and needs to be booked at least with 12 weeks in advance. Not covered are costs for rental cars, food, drinks, other activities.\n\nWorking in Conil is not considered as business trip unless the company specifically asked you to do so.\n\nEmployees are entitled to work from Conil as often as they want if the apartment is available. To book the apartment, please contact Dorina.'
    },
  ],

  onboardingprocess: [
    {
      value: 'communications-tools',
      label: 'Communications tools',
    },
    {
      value: 'sshkey',
      label: 'SSH Keys',
      tool: 'You will need a SSH key in order to access VMs and be able to deploy',
      usage: 'ssh-keygen -t rsa -b 4096',
      nb: 'Create your SSH key and send to Stefan (s.weber@1xinternet.de).'
    },
    {
      value: 'drupalorg',
      label: 'Drupal.org',
      tool: 'Add 1xINTERNET GmbH to your Work profile in your Drupal.org user account.',
      usage: 'https://www.drupal.org/1xinternet-gmbh',
      nb: 'Learn how to contribute to Drupal [1x guide for Drupal contributions needed]: https://www.drupal.org/getting-involved-guide].'
    },
    {
      value: 'playbook',
      label: 'Playbook',
      tool: 'In the Playbook we define how we work and function. Dos, donts, processes, etc.',
      usage: 'playbook.1xinternet.de'
    },
    {
      value: 'coding',
      label: 'Coding conventions',
      tool: 'In the Playbook we define how we work and function. Dos, donts, processes, etc.',
      usage: 'https://www.drupal.org/docs/develop/standards',
      nb: 'We want our code to meet the Drupal coding standards. Therefore, everyone is required to have coder installed globally and set up.'
    },
  ],
};
