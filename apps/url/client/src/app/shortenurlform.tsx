import { Button, Input, FormErrorMessage, FormControl } from '@chakra-ui/react';
import { FormEvent, useCallback, useState } from 'react';

type ShortenUrlFormProps = {
  requestShortUrl: (original: string) => Promise<void>;
};

export const ShortenUrlForm: React.FC<ShortenUrlFormProps> = ({
  requestShortUrl,
}) => {
  const [inputUrl, setInputUrl] = useState<string>('');
  const [error, setError] = useState('');
  const onSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      if (!inputUrl.startsWith("http://") && !inputUrl.startsWith("https://") && !inputUrl.startsWith("www.")) {
        setError("Please enter a valid link starting with 'http://' or 'https://'");
      } else {
        setError('');
        await requestShortUrl(inputUrl);
        setInputUrl('')
      }
    },
    [inputUrl, setInputUrl]
  );
  return (
    <FormControl isInvalid={!!error}>
      <form onSubmit={onSubmit}>
        <Input
          id="url-input"
          size="lg"
          marginBlock={4}
          value={inputUrl}
          color="pink.200"
          focusBorderColor='pink.700'
          bg="white"
          onChange={(e) => {
            setError('');
            setInputUrl(e.target.value);
          }}
          placeholder="www.my-super-long-url-here.com/12345"
          _placeholder={{ opacity: 0.9, color: 'inherit' }}
        />
        <FormErrorMessage fontSize="lg">{error}</FormErrorMessage>
        <Button id="submit-btn" type="submit" colorScheme="pink" size="lg" my={3}>
          Generate
        </Button>
      </form>
    </FormControl>
  );
};

export default ShortenUrlForm;