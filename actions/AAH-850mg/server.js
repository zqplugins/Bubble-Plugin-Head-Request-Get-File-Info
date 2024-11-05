async function(properties, context) {
    const options = {
        method: "HEAD"
    };
    
    const response = await fetch(properties.file_url, options);
    const fileheaders = response.headers;
    
    const contenttype = fileheaders.get('content-type')
    const contentlength = fileheaders.get('content-length')
    const lastmodified = fileheaders.get('last-modified')

    const result = {
        content_type: contenttype,
        content_length: contentlength,
        last_modified: lastmodified
    }

    return result;
}