import { getCatalogue, url } from './getCatalogue'

describe('Get Catalogue API', () => {
  const data = { foo: 'bar' }

  beforeEach(() => {
    fetch.mockResponseOnce(JSON.stringify(data))
  })

  it('calls the `url` and returns data', async () => {
    const result = await getCatalogue()

    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toEqual(url)
    expect(result).toEqual(data)
  })
})
