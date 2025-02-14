const createParams = (data: string) => {
	const params = data
	.split(',')
	.map(item => item.trim())
	.filter(item => item !== '') 
	.reduce<string[]>((acc, item) => {
          if (!isNaN(Number(item))) {
            acc.push(`id=${item}`);
          } else {
            acc.push(`username=${item}`);
          }
          return acc;
        }, []);
	return params.join('&');
}

export default createParams