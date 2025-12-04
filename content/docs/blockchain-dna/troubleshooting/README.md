# Troubleshooting Guide

Common issues and solutions for BlockchainDNA platform.

---

## API Issues

### Authentication Errors

**Error**: `401 Unauthorized`

**Solutions**:
1. Verify your API key is correct
2. Check that the API key is included in the `Authorization` header
3. Ensure the API key format is: `Bearer YOUR_API_KEY`
4. Verify the API key hasn't expired
5. Check your account status (suspended/active)

**Error**: `403 Forbidden`

**Solutions**:
1. Verify your API key has the required permissions
2. Check your subscription plan includes the requested feature
3. Contact support if you believe you should have access

---

### Rate Limiting

**Error**: `429 Too Many Requests`

**Solutions**:
1. Implement exponential backoff in your client
2. Reduce request frequency
3. Use batch endpoints for multiple operations
4. Upgrade to a higher tier plan
5. Contact support for custom rate limits (Enterprise)

**Best Practices**:
- Cache responses when possible
- Use webhooks instead of polling
- Batch multiple operations together
- Monitor your rate limit usage in the dashboard

---

### Request Timeouts

**Error**: `504 Gateway Timeout` or `Request timeout`

**Solutions**:
1. Check your network connection
2. Verify the service status page
3. Reduce batch size for bulk operations
4. Increase timeout settings in your client
5. Retry the request (may be temporary)

**For Batch Operations**:
- Use smaller batch sizes (100-500 items)
- Process in parallel with concurrency limits
- Monitor progress via status endpoints

---

## Analysis Issues

### Slow Analysis Performance

**Symptoms**: Analysis takes longer than expected

**Solutions**:
1. **Check batch size**: Large batches take longer
   - Recommended: 100-500 wallets per batch
   - Use parallel processing with concurrency limits

2. **Enable caching**: Use Redis caching for faster repeated analyses
   - Cache TTL: 15 minutes (configurable)
   - Cache keys are automatically generated

3. **Check database load**: High database load can slow analysis
   - Monitor database connection pool
   - Check for long-running queries
   - Optimize database indexes

4. **Network latency**: Check network connectivity
   - Use regional endpoints when available
   - Verify blockchain node connectivity

5. **Service status**: Check if services are experiencing issues
   - Monitor service health endpoints
   - Check status page for known issues

---

### Inaccurate Results

**Symptoms**: Analysis results don't match expectations

**Solutions**:
1. **Verify input data**: Ensure transaction data is complete and accurate
   - Check transaction timestamps
   - Verify wallet addresses are correct
   - Ensure sufficient transaction history

2. **Check configuration**: Verify analysis parameters
   - Window type (7d, 30d, 90d)
   - Feature extraction settings
   - Risk threshold configurations

3. **Review data quality**: Poor data quality affects results
   - Ensure transactions are properly cleaned
   - Verify data completeness
   - Check for data corruption

4. **Contact support**: If issues persist, contact support with:
   - Sample wallet addresses
   - Expected vs actual results
   - Configuration details

---

### Missing Data

**Symptoms**: Analysis returns null or incomplete results

**Solutions**:
1. **Insufficient transaction history**: 
   - Ensure wallet has enough transactions
   - Minimum recommended: 10+ transactions
   - Check transaction window coverage

2. **Data ingestion issues**:
   - Verify blockchain node connectivity
   - Check data ingestion logs
   - Ensure data is being collected

3. **Cache issues**:
   - Clear cache if using stale data
   - Check cache TTL settings
   - Verify cache is working correctly

---

## Integration Issues

### SDK Errors

**Error**: `Module not found` or import errors

**Solutions**:
1. Verify SDK is installed: `npm install @blockchaindna/sdk`
2. Check Node.js version (requires Node 18+)
3. Verify TypeScript configuration (if using TypeScript)
4. Clear node_modules and reinstall
5. Check for version conflicts

**Error**: `NetworkError` or connection issues

**Solutions**:
1. Verify API endpoint URL is correct
2. Check network connectivity
3. Verify firewall/proxy settings
4. Test with curl/Postman to isolate SDK issues
5. Check SSL certificate validity

---

### Webhook Issues

**Symptoms**: Webhooks not being received

**Solutions**:
1. **Verify webhook URL**:
   - Ensure URL is publicly accessible
   - Check SSL certificate is valid
   - Verify URL is correct in dashboard

2. **Check webhook configuration**:
   - Verify events are enabled
   - Check webhook secret is configured
   - Verify webhook is active (not paused)

3. **Test webhook endpoint**:
   - Use webhook testing tools
   - Verify endpoint returns 200 status
   - Check endpoint logs

4. **Monitor webhook delivery**:
   - Check webhook delivery logs in dashboard
   - Review retry attempts
   - Check for delivery failures

---

## Database Issues

### Connection Errors

**Error**: `Database connection failed`

**Solutions**:
1. Verify database credentials
2. Check database server is running
3. Verify network connectivity
4. Check firewall rules
5. Review connection pool settings

### Query Performance

**Symptoms**: Slow database queries

**Solutions**:
1. **Check indexes**: Ensure proper indexes exist
   - Wallet address indexes
   - Timestamp indexes
   - Composite indexes for common queries

2. **Optimize queries**:
   - Use query explain plans
   - Avoid full table scans
   - Use appropriate WHERE clauses

3. **Connection pooling**:
   - Increase pool size if needed
   - Monitor pool usage
   - Check for connection leaks

4. **Database maintenance**:
   - Run VACUUM/ANALYZE regularly
   - Monitor database size
   - Check for table bloat

---

## Performance Issues

### High Memory Usage

**Symptoms**: High memory consumption

**Solutions**:
1. **Reduce batch sizes**: Smaller batches use less memory
2. **Enable streaming**: Use streaming APIs for large datasets
3. **Clear caches**: Periodically clear in-memory caches
4. **Monitor memory**: Use monitoring tools to identify leaks
5. **Scale horizontally**: Add more instances if needed

### High CPU Usage

**Symptoms**: High CPU consumption

**Solutions**:
1. **Optimize batch processing**: Use appropriate concurrency limits
2. **Enable caching**: Reduce redundant computations
3. **Check for infinite loops**: Review custom code
4. **Scale resources**: Increase CPU allocation if needed
5. **Profile code**: Use profiling tools to identify bottlenecks

---

## Error Codes Reference

### HTTP Status Codes

- **200 OK**: Request successful
- **201 Created**: Resource created successfully
- **400 Bad Request**: Invalid request format
- **401 Unauthorized**: Authentication failed
- **403 Forbidden**: Insufficient permissions
- **404 Not Found**: Resource not found
- **429 Too Many Requests**: Rate limit exceeded
- **500 Internal Server Error**: Server error
- **502 Bad Gateway**: Gateway error
- **503 Service Unavailable**: Service temporarily unavailable
- **504 Gateway Timeout**: Request timeout

### API Error Codes

- **INVALID_API_KEY**: API key is invalid or expired
- **RATE_LIMIT_EXCEEDED**: Rate limit exceeded
- **INVALID_WALLET**: Wallet address is invalid
- **INSUFFICIENT_DATA**: Not enough transaction data
- **ANALYSIS_FAILED**: Analysis processing failed
- **SERVICE_UNAVAILABLE**: Service temporarily unavailable
- **DATABASE_ERROR**: Database operation failed
- **VALIDATION_ERROR**: Request validation failed

---

## Debugging Tips

### Enable Debug Logging

Set environment variable:
```bash
DEBUG=blockchaindna:*
```

Or in code:
```typescript
import { logger } from '@blockchaindna/sdk';
logger.level = 'debug';
```

### Check Service Health

```bash
curl https://api.blockchaindna.io/health
```

### Monitor API Requests

1. Enable request logging in SDK
2. Use API dashboard to view request history
3. Check response times and error rates
4. Review rate limit usage

### Test with Minimal Example

```typescript
import { BlockchainDNA } from '@blockchaindna/sdk';

const sdk = new BlockchainDNA({
  apiKey: 'your-api-key',
  baseURL: 'https://api.blockchaindna.io'
});

// Test simple request
const health = await sdk.health();
console.log(health);
```

---

## Getting Help

If you're still experiencing issues:

1. **Check Documentation**: Review relevant documentation sections
2. **Search Knowledge Base**: Search for similar issues
3. **Review Logs**: Check application and API logs
4. **Contact Support**: 
   - Email: support@blockchaindna.io
   - Include: Error messages, logs, steps to reproduce
5. **Community**: Post on GitHub discussions

---

**Last Updated**: December 2025  
**Version**: 2.0

